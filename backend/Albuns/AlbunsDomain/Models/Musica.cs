using System;
using System.Collections.Generic;
using System.Text;

namespace AlbunsDomain.Models
{
    public class Musica
    {
        public string MusicaId { get; set; }
        public string AlbumId { get; set; } // chave estrangeira
        public string Nome { get; set; }
        public int Duracao { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Musica && ((Musica)obj).MusicaId == this.MusicaId;
        }

        public override int GetHashCode()
        {
            return ("Musica######" + MusicaId).GetHashCode();
        }
    }
}
